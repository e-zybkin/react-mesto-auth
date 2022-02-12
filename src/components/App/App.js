import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from '../Footer/Footer';
import ImagePopup from '../ImagePopup/ImagePopup';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';
import DeleteCardPopup from '../DeleteCardPopup/DeleteCardPopup';
import api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);
  const [isDeletePopupOpen, setDeletePopup] = React.useState(false);
  const [isImagePopupOpen, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then(result => {
        setCurrentUser(result);
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(result => {
        setCards(result)
      })
      .catch(error => {
        console.log('ОШИБКА: ', error)
      })
  }, [])

  function handleEditAvatarClick() {
    setAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setPlacePopup(true);
  }

  function handleDeleteButtonClick(card) {
    setDeletePopup(true);
    setSelectedCard(card);
  }

  function handleCardClick(card) {
    setImagePopup(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setProfilePopup(false);
    setPlacePopup(false);
    setAvatarPopup(false);
    setDeletePopup(false);
    setImagePopup(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(result => {
        setCards((state) => state.filter((c) => c._id !== card._id))
        closeAllPopups();
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  function handleUpdateUser(formData) {
    api.setUserData(formData)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  function handleUpdateAvatar(formData) {
    api.setUserAvatar(formData)
      .then(result => {
        setCurrentUser(result);
        closeAllPopups();
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  function handleAddCard(formData) {
    api.setNewCard(formData)
      .then(result => {
        setCards([result, ...cards]);
        closeAllPopups();
      })
      .catch(error => {
        console.log('ОШИБКА: ', error);
      })
  }

  return (
    <div className="page">
      <div className="wrapper">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Routes>
            <Route
              path='/'
              element={
                <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                onDeleteButton={handleDeleteButtonClick}
                />
              }
            />

            <Route
              path='/sign-up'
              element={
                <Register />
              }
            />

            <Route
              path='/sign-in'
              element={
                <Login />
              }
            />
          </Routes>
          {/*<Footer />*/}

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddCard={handleAddCard}
          />

          <ImagePopup
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />

          <DeleteCardPopup
            card={selectedCard}
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
