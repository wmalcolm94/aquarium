FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal as base
WORKDIR /app
RUN apt-get update
RUN apt-get -y install curl
EXPOSE 80
EXPOSE 443

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:6.0-focal as build
WORKDIR /src
COPY ["api.csproj", "./"]
RUN dotnet restore "api.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "api.csproj" -c Release -o /app/build/

FROM build AS publish
RUN dotnet publish "api.csproj" -c Release -o /app/publish \
  -r linux-x64 \
  --self-contained true \
  -p:PublishTrimmed=true \
  -p:PublishSingleFile=true
 
FROM base as final
WORKDIR /app
EXPOSE 8000
COPY --from=publish /app/publish .
ENTRYPOINT [ "./api" ]