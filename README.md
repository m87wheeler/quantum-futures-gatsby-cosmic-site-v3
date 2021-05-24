# Quantum Futures Website

### Created By MWWDD

---

## NPM Packages

- gatsby

---

## RESTful API For RSS Conversion

The Quantum Daily RSS feed required a custom made server-side REST API to convert the XML into JSON - compatible with Gatsby's GraphQL implemenation. This API is currently hosted on `http://localhost:3001` and serves a single response.

```
{
  success: true,
  data: [XML Data Object]
}
```

Any unsuccesful responses will return `success: false` and an error message in the object's `message` key.
