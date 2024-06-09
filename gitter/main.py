from fastapi import FastAPI, Header, status, Response
import requests

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/repos", status_code=200)
def get_repos(response: Response, authorization: str | None = Header(default=None)):
    if authorization is None:
        response.status_code = status.HTTP_401_UNAUTHORIZED
        return {"message": "Not authorized"}

    authorization = authorization.replace("Bearer ", "")
    res = requests.get("https://api.github.com/user/repos",
                        headers={"Authorization": f"Bearer {authorization}"})

    print(res.content)

    return { "message": res.content }
