from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai.intial_agent import init_router

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(init_router, prefix="/api")


@app.get("/health")
def health_check():
    return {"status": "healthy"}