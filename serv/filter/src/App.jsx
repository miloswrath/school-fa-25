import { Fragment } from 'react'
import users from './data.js'
import './App.css'

const categories = [
  {
    id: 'young',
    title: 'Under 35',
    description: 'Early-career explorers building momentum.',
    filter: (user) => user.dob.age < 35,
  },
  {
    id: 'mid',
    title: '35 to 54',
    description: 'Experienced professionals in their prime years.',
    filter: (user) => user.dob.age >= 35 && user.dob.age < 55,
  },
  {
    id: 'senior',
    title: '55 and above',
    description: 'Seasoned mentors with decades of stories.',
    filter: (user) => user.dob.age >= 55,
  },
]

function App() {
  const grouped = categories.map((category) => ({
    ...category,
    people: users.filter(category.filter),
  }))

  return (
    <main className="app">
      <header className="intro">
        <h1>People Insights</h1>
        <p>Thirty randomly selected profiles grouped by age for a quick snapshot.</p>
      </header>

      <section className="groups">
        {grouped.map((group) => (
          <Fragment key={group.id}>
            <h2>{group.title}</h2>
            <p className="group-description">
              {group.description} ({group.people.length})
            </p>
            <div className="cards">
              {group.people.map((person) => (
                <article className="card" key={person.email}>
                  <img
                    className="avatar"
                    src={person.picture.large}
                    alt={`${person.name.first} ${person.name.last}`}
                  />
                  <h3>
                    {person.name.first} {person.name.last}
                  </h3>
                  <p className="meta">
                    {person.location.city}, {person.location.country}
                  </p>
                  <p className="meta">
                    Age {person.dob.age} · {person.gender}
                  </p>
                  <a className="contact" href={`mailto:${person.email}`}>
                    {person.email}
                  </a>
                </article>
              ))}
            </div>
          </Fragment>
        ))}
      </section>
    </main>
  )
}

export default App
