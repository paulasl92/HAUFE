import error from '../util/images/404message.jpg';

const NotFoundPage = () => {
    return (
      <div className="notFound">
        <h1>Sorry! Rick is fighting with Morty, and they broke the app... again</h1>
        <img src={error} alt="404 Image Error"/>
      </div>
    )
  }

export default NotFoundPage;