FROM python:3.9

RUN pip install pipenv

WORKDIR /recom

COPY app/ /recom/app/
COPY data/ /recom/data/
COPY Pipfile /recom/Pipfile
COPY Pipfile.lock /recom/Pipfile.lock

RUN pipenv install --system --deploy

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8009", "--reload"]
