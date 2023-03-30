FROM python:3.9

RUN pip install pipenv

COPY Pipfile Pipfile.lock /app/

WORKDIR /app

RUN pipenv install --system --deploy

COPY ./app /app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8009", "--reload"]
