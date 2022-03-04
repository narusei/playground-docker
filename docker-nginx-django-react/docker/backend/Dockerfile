FROM python:3.8.3-alpine

WORKDIR /app
COPY ./backend/Pipfile /app/Pipfile
COPY ./backend/Pipfile.lock /app/Pipfile.lock

RUN pip install --upgrade pip
RUN pip install pipenv
RUN pip install gunicorn
RUN pipenv install --system
RUN pip uninstall -y pipenv

ADD ./docker /app/docker
ADD ./backend /app/backend