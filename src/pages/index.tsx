import {Fragment} from 'react'
import Head from 'next/head'

import {Navbar} from '../components/Navbar'

export default function Page() {
  return (
    <Fragment>
      <Head>
        <title>Irving Dinh</title>
      </Head>

      <Navbar/>

      <div className="p-4">
        501 - Not Implemented
      </div>
    </Fragment>
  )
}
