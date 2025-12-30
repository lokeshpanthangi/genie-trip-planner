from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
import os


load_dotenv()


model = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)
vision_model = ChatOpenAI(model="gpt-4o-vision-preview", temperature=0.3)
parser = StrOutputParser()