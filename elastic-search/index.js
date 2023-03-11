const express = require('express');
const { Client } = require('@elastic/elasticsearch');

// Create an Elasticsearch client instance
const client = new Client({ node: 'http://localhost:9200' });

// Create an Express application instance
const app = express();

// Define a route to search for documents
app.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const { body } = await client.search({
      index: 'my_index',
      body: {
        query: {
          match: { title: q }
        }
      }
    });
    res.json(body.hits.hits);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error searching for documents');
  }
});

// Start the Express server
app.listen(4000, () => {
  console.log('Express server listening on port 3000');
});
