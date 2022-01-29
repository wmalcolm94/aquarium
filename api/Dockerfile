FROM mcr.microsoft.com/dotnet/sdk:6.0 as build

WORKDIR /app
COPY . .
RUN dotnet build 
EXPOSE 7289
CMD ['dotnet', 'run']