export const getFilmsQuery = `{
movies {
      items {
      title
      trivia {
        universeTimeline
      }
      release
      media {
        type
        src
      }
      rating
      cast {
        media {
          type
          src
        }
        name
        id
      }
    }
  }
}`

export const getCharactersQuery = `{
    characters{
    items{
      id
      name
      castName
      media {
        type
        src
      }
    }
  }
}`

export const getCharacterByIdQuery = (id) => `{
character(id: "${id}"){
      id
      movies{
      title
      trivia {
        universeTimeline
      }
      release
      media {
        type
        src
      }
      rating
      cast {
        media {
          type
          src
        }
        name
        id
      }
      }
    }
}`
