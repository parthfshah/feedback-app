import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About the project</h1>
            <p>React app to get feedback</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
      
    </Card>
  )
}

export default AboutPage