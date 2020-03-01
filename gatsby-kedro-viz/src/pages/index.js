import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import data from './default-kedro157.json'
import KedroViz from '@quantumblack/kedro-viz';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>default kedro pipeline</h1>
    <div className="pipeline" style={{ minHeight: '80vh' }}>
      <KedroViz style={{ minHeight: '80vh' }} data={data} />
    </div>
  </Layout>
)

export default IndexPage
