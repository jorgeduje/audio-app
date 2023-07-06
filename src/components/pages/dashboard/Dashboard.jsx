
const Dashboard = ({generarDocumentos}) => {
  return (
    <div>
        <h1>Aca manipulo los datos por que soy el admin</h1>
        
        <button onClick={generarDocumentos}>Generar</button>
    </div>
  )
}

export default Dashboard