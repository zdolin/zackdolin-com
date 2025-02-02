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

const sectionWrapper = `{
  category
  categoryIcon {
    type
  }
  heading
  body
}`;

export const PAGE_QUERY = `query {
  introSection: introSectionCollection(limit: 1) {
    items {
      sectionWrapper ${sectionWrapper}
      heroImage {
        url
        title
      }
      checkListCollection {
        items {
          icon {
            type
          }
          text
        }
      }
      statsListCollection {
        items {
          quantity
          text
        }
      }
    }
  }
  skillsSection: sectionSkillsCollection(limit: 1) {
    items {
      sectionWrapper ${sectionWrapper}
      skillsListCollection {
        items {
          percentage
          label
        }
      }
    }
  }
}`;
