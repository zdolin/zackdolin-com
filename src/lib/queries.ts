// src/lib/queries.ts
export const SIDEBAR_QUERY = `
  query {
    sidebarCollection(limit: 1) {
      items {
        name
        description
        image {
          url
          title
        }
        detailsListCollection {
          items {
            label
            value
          }
        }
        miniNavListCollection {
          items {
            id
            icon {
              type
            }
            text
          }
        }
      }
    }
  }
`;
