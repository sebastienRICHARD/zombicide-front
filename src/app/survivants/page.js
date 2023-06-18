import './survivants.scss'
import TableSearch from './../components/tableSearch'

async function getSurvivors() {
  const res = await fetch('http://localhost:3001/api/get-survivors')
  return res.json()
}

export default async function Survivors() {
  const survivors = await getSurvivors()

  return (
    <main>
      <h1 className="title">Survivants</h1>
      <TableSearch survivors={survivors} />
    </main>
  )
}
