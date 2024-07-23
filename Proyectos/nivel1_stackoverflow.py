import requests
from bs4 import BeautifulSoup

# Debemos cambiar el encabezado de la petición para que no la detecte como ROBOT
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

url = "https://stackoverflow.com/questions"

respuesta = requests.get(url, headers=headers)


soup = BeautifulSoup(respuesta.text, 'lxml')

contenedor_de_preguntas = soup.find(id="questions")
lista_de_preguntas = contenedor_de_preguntas.find_all('div',class_="question-summary")

for pregunta in lista_de_preguntas:
    texto_pregunta = pregunta.find('h3').text
    print(texto_pregunta)

