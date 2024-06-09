FROM python:3.12-slim AS build

WORKDIR /gitter
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000
CMD [ "fastapi", "dev", "--host", "0.0.0.0"]
