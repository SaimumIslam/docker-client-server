FROM python:3.10-slim

# not to write bytecode .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt ./

RUN test -d venv || python3 -m venv venv
RUN /bin/bash -c "source venv/bin/activate" 

RUN pip install -r requirements.txt

COPY . .

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

