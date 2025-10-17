const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((p, idx) => (
        <Part key={idx} part={p} />
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  let total = 0
  parts.forEach(p => total += p.exercises)
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = { 
    name: 'Desenvolvimento de aplicação Half Stack' ,
    parts: [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
