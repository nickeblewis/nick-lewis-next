import markdownStyles from './markdown-styles.module.css'
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'


export default function PostBody({ content }) {
  const serializers = {
    types: {
      youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} />)
      }
    }
  }
  
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent blocks={content} serializers={serializers} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} className={markdownStyles.markdown} />
    </div>
  )
}
