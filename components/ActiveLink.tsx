import { CSSProperties, FC } from "react";
import Link from "next/link"
import { useRouter } from "next/router"

/* Asigando la propiedad CSSProperties logramos que en este
objeto se tomen solo propiedades del tipo css, lo cual
marcara error si ponemos cualquier otro tipo de propiedad. */
const style: CSSProperties = {
   color: '#0070f3',
   textDecoration: 'underline'
}

//TypeScript
interface Props {
   texto: string; // Seteamos con ts que es el tipo de archivo 'text' va a ser solo como string.
   href: string
}

/* Aqui como trabajamos con ts deberemos poner
que nuestras funcion de del tipo FC(Functinal Component)
y especificarle las props con <Props> */
export const ActiveLink: FC<Props> = ({texto, href}) => {

   /* El asPath lo utilizamos para saber en dode estamos parados
   dentro de la pagina. home, about, etc. y luego pintarlo
   con los estilos */
   const {asPath} = useRouter();

  return (
      <Link href={ href }>
         <span style={asPath === href ? style : undefined }>{ texto }</span>
      </Link>
  )
}
