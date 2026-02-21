## Si vas a hacer un fork de este proyecto o usarlo en el tuyo, por favor mencióname ❤️

## Descargador masivo de imágenes de Danbooru

¡hola! Este es un proyecto que hice con typescript para descargar rápidamente imágenes de danbooru, también descarga gifs y videos de danbooru

# Pre requisitos

1- Esto fue hecho con **Node JS** así que debes instalarlo primero antes de empezar **enlace de descarga ->**[Node.js — Descarga Node.js®](https://nodejs.org/es/download).

2- Además, usé **pnpm** en lugar de **npm** como gestor de paquetes, así que debes instalarlo primero **Enlace oficial de instalación ->** [Installation | pnpm](https://pnpm.io/installation).

# Instalación 

1- Primero descarga el archivo desde **GitHub**, se descargará un .zip, extráelo y abre la carpeta con tu editor de código o terminal, yo estaré usando **Visual Studio code** para la guía.

2- Una vez abras el archivo, abre una terminal y escribe:

```cmd
pnpm install
```

![Información de Instalación](./gitImages/Pasted%20image%2020260221194424.png)

3-¡Eso es todo! ¡Ya has instalado el descargador de imágenes! ¡Ahora procede a la guía de uso!

# Uso

1- Verás que hay un archivo llamado `downloadInfo.xml`, ahí es donde escribirás toda la información sobre las imágenes que quieres descargar, como etiquetas (tags), paginaciones, límites, etc.

```xml
<downloadInfo outputPath="./images" limit="5" maxPages="all" separationByPage="false" separationByArtist="false">

    <!-- escribe "all" en maxPages para descargar todas las imágenes -->

    <baseTags>

    </baseTags>

    <includeTags>

    </includeTags>

    <excludeTags>

    </excludeTags>

</downloadInfo>
```

# Ejemplo

```xml
<downloadInfo outputPath="./images" limit="20" maxPages="10" separationByPage="true"

    separationByArtist="false">

    <!-- escribe "all" en maxPages para descargar todas las imágenes -->

    <baseTags>

        hayakawa_tazuna

    </baseTags>

    <includeTags>

        horse_girl

    </includeTags>

    <excludeTags>

        kiryuin_aoi

    </excludeTags>

</downloadInfo>
```

# Explicación de Etiquetas

`downloadInfo`: Esta es la etiqueta raíz que también contiene los siguientes atributos:

`outputPath`: Esta es la ruta donde se guardarán las imágenes, si no existe el programa la creará (asegúrate de que el outputPath no esté protegido o de lo contrario el programa fallará a menos que le des los permisos adecuados), por defecto es `./images`.

`limit`: Cuántas imágenes contendrá una página.

`maxPages`: Cuántas páginas descargará (empieza a contar desde 0, si quieres descargar 10 páginas tendrás que escribir 9), si escribes "all" descargará todas las páginas disponibles.

`separationByPage`: Si es true, creará una carpeta para cada página y guardará sus respectivas imágenes allí.

`separationByArtist`: Si es true, creará una carpeta para cada artista y guardará sus respectivas imágenes allí.

`baseTags`: Estas son las etiquetas que la api de Danbooru permite usar en la solicitud, solo puedes colocar dos, si colocas más el programa fallará, a menos que seas un usuario premium de danbooru, en cuyo caso deberías poder colocar más.

Estas son opcionales pero recomiendo usarlas ya que reduce la cantidad de información innecesaria que el programa tiene que obtener.

`IncludeTags`: estas son las etiquetas que la publicación debe incluir para ser descargada.

`excludeTags`: estas son las etiquetas que la publicación no debe incluir para ser descargada.

# Cómo ejecutar:

Solo escribe `pnpm run start` en tu terminal y ejecutará el programa.

![Información de Ejecución](./gitImages/Pasted%20image%2020260221194448.png)

# ¡Eso es todo! ¡El programa debería empezar a descargar las imágenes!

Si encuentras algún error por favor, escribe un issue, los estaré leyendo de vez en cuando.
