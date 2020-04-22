import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Work from "../components/work/."
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="work" />
<Work />
   
  </Layout>
)

export default IndexPage
