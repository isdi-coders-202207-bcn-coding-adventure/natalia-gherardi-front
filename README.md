CODING ADVENTURE

¿Cuándo tengo que usar useCallback()?
Usamos el hook useCallback() cuando quiero que una función sea memoizada, es decir se declara 1 vez y sólo vuelve a definirse cuando cambia alguno de los valores que están en su array de dependencias.
Por ejemplo, si en otro hook como useEffect he puesto en su array de dependencias una función, se generará un loop infinito, ya que cada vez que se renderice el componente en el que está definida la función, ésta vovlerá a declararse -se escucha plop-, por lo que estará cambiando el array de dependencias del useEffect y por ende se volverá a ejecutar, generando un loop. Esto se evita declarando la función dentro de un useCallback().
