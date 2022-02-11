FROM mcr.microsoft.com/dotnet/sdk:6.0 as build

WORKDIR /app
COPY . .

RUN ls 
RUN dotnet build
RUN ls bin/

FROM mcr.microsoft.com/mssql/server:2019-latest
### Install Unzip
USER root
RUN apt-get update \
    && apt-get install unzip -y

### Install SQLPackage for Linux and make it executable
RUN wget -progress=bar:force -q -O sqlpackage.zip https://aka.ms/sqlpackage-linux \
    && unzip -qq sqlpackage.zip -d /opt/sqlpackage \
    && chmod +x /opt/sqlpackage/sqlpackage

USER 1001

### Add the DACPAC to the image
COPY --from=build /app/bin/Debug/netstandard2.0/database.dacpac /tmp/database.dacpac

### Configure the required environmental variables
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=Ella2020

### Launch SQL Server, confirm startup is complete, deploy the DACPAC, then delete the DACPAC and terminate SQL Server.
### See https://stackoverflow.com/a/51589787/488695
RUN ( /opt/mssql/bin/sqlservr & ) | grep -q "Service Broker manager has started" \
    && /opt/sqlpackage/sqlpackage /a:Publish /tsn:. /tdn:AquariumDatabase /tu:sa /tp:Ella2020 /sf:/tmp/database.dacpac \
    && pkill sqlservr