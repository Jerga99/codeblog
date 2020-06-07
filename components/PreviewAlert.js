
import { Alert } from 'react-bootstrap';

export default function PreviewAlert() {
  return (
    <Alert variant="secondary">
      This is the preview mode!{' '}
      {/* TODO: This will lead me to API route that will remove preview cookies */}
      <Alert.Link href="#">Leave preview mode</Alert.Link>
    </Alert>
  )
}
