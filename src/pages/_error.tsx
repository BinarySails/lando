import { CustomError } from "../components/utilities/CustomError";

function extractMessage(error: number) {
  switch (error) {
    case 404:
      return "Página no encontrada";
    case 500:
      return "Error interno del servidor";
    default:
      return "Error desconocido";
  }
}

export default function Error({ statusCode }: { statusCode: number }) {
  return <CustomError code={statusCode} message={extractMessage(statusCode)} />
}

Error.getInitialProps = ({ res, err }: { res: any, err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
