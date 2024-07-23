import requests
from lxml import html

# Debemos cambiar el encabezado de la petición para que no la detecte como ROBOT
encabezados = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# Dominio a hacer Scraping
url = "https://www.wikipedia.org/"

# Le añadimos el encabezado a la petición
respuesta = requests.get(url, headers=encabezados)
respuesta.encoding = 'utf-8' # Codificar correctamente caracteres

# Convertimos el html que viene en formato texto a etiquetas html
parser = html.fromstring(respuesta.text)

# Obtener elemento por su id, dos formas de hacerlo
##ingles = parser.get_element_by_id("js-link-box-en")
##print(ingles)
##ingles2 = parser.xpath("//a[@id='js-link-box-en']/strong/text()")
##print(ingles2)

# Obtener los idiomas 1 metodo
idiomas = parser.xpath("//div[contains(@class,'central-featured-lang')]//strong/text()")
for idioma in idiomas:
    print(idioma)

# Otra forma de obtenerlos
idioms = parser.find_class('central-featured-lang')
# for idioma in idioms:
#     print(idioma.text_content())