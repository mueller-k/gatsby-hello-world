import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img
        src="https://ucarecdn.com/8dcd206c-ef70-47f7-aeee-00e495bbdf2d/trail.jpg"
        alt=""
      />
    </div>
  )
}
