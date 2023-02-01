const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '26yp5ywt',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

export default client