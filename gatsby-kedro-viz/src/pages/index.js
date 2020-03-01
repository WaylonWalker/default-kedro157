import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import data from './default-kedro157.json'
import KedroViz from '@quantumblack/kedro-viz';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.componentDidMount = () => {
      this.setState({ loaded: false })

    }
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>default kedro pipeline</h1>
        <div className="pipeline" style={{ minHeight: '80vh' }}>
          {this.state.loaded === false ? 'loading' : <KedroViz style={{ minHeight: '80vh' }} data={data} />}
        </div>
      </Layout>
    )
  }
}

export default IndexPage
