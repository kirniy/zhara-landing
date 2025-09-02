import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Maximize2, X, Waves, Phone, Globe, Ticket, Calendar, Send } from 'lucide-react'
import './App.css'

// Import video assets
import bgVideo from '/bgvideo.mp4'
import posterVideo from '/poster.webm'
import circleVideo1 from '/circle1.mp4'
import circleVideo2 from '/circle2.mp4'

function App() {
  const [showTicketMenu, setShowTicketMenu] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [eventVideoMuted, setEventVideoMuted] = useState(true)
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false)
  const [showSplash, setShowSplash] = useState(true)
  const [bubblesAnimation, setBubblesAnimation] = useState(true)
  const [showBookingSubmenu, setShowBookingSubmenu] = useState(false)
  const [circleVideoMuted, setCircleVideoMuted] = useState(true)
  const [circleVideoSrc, setCircleVideoSrc] = useState(null)
  const audioRef = useRef(null)
  const bookingBtnRef = useRef(null)
  const submenuRef = useRef(null)
  const circleVideoRef = useRef(null)

  useEffect(() => {
    const resizeHandler = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  useEffect(() => {
    // Set Telegram WebApp header color to red-orange
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.setHeaderColor('#e93504');
    }
    
    // Dispatch custom userGesture event on first actual user interaction to unlock videos
    const gestureHandler = () => {
      window.dispatchEvent(new Event('userGesture'));
    };
    document.addEventListener('pointerdown', gestureHandler, { once: true });
    
    // Hide splash screen after 3 seconds
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    
    // Randomly select circle video
    setCircleVideoSrc(Math.random() < 0.5 ? circleVideo1 : circleVideo2);
    
    return () => {
      clearTimeout(splashTimer);
    };
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (showBookingSubmenu && 
          bookingBtnRef.current && 
          !bookingBtnRef.current.contains(e.target) &&
          submenuRef.current &&
          !submenuRef.current.contains(e.target)) {
        setShowBookingSubmenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showBookingSubmenu])

  const events = [
    {
      id: 'sep5',
      title: 'ЖАРА | 05.09',
      date: '5 сентября, пятница',
      time: '23:00 - 07:00',
      fullDate: new Date('2025-09-05T23:00:00'),
      description: `В последние теплые дни проводим фирменную пенную вечеринку.

Бармены будут вооружены водными пистолетами - они намерены принимать заказы держа вас строго под прицелом, а на главном танцполе будет пенная пушка 🫧

Ну и не забываем, про сменную футболку и готовность стать мокрым без сожалений

RESERV: 8-921-410-44-40

Подпишись на ТГ-канал клуба, покажи кассиру и получи бесплатный коктейль

FC/DC 18+

С собой оригиналы документов удостоверяющие личность. (Паспорт/права/военный билет)

*билет и наличие брони столов даёт право пройти без очереди, но не отменяет FC!

Конюшенная площадь, 2В

ты нас сразу услышишь`,
      poster: posterVideo,
      video: posterVideo,
      tcEvent: '688e104ddc1674ac983de8d6',
      tcToken: 'eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjMyMDZlZTc4NzQ5MDk3YzU5MmE2Njk3In0.o8XKf5PO_f33Eg3RIeUe2PYBEeuy4o2yI4vh6qQ21T8',
      activities: [
        'Пенная вечеринка 🫧',
        'Спешал коктейли 🍸',
        'Фотозона 📸',
        'Водные пистолеты 🔫'
      ]
    },
    {
      id: 'sep6',
      title: 'ЖАРА | 06.09',
      date: '6 сентября, суббота',
      time: '23:00 - 07:00',
      fullDate: new Date('2025-09-06T23:00:00'),
      description: `В последние теплые дни проводим фирменную пенную вечеринку.

Бармены будут вооружены водными пистолетами - они намерены принимать заказы держа вас строго под прицелом, а на главном танцполе будет пенная пушка 🫧

Ну и не забываем, про сменную футболку и готовность стать мокрым без сожалений

RESERV: 8-921-410-44-40

Подпишись на ТГ-канал клуба, покажи кассиру и получи бесплатный коктейль

FC/DC 18+

С собой оригиналы документов удостоверяющие личность. (Паспорт/права/военный билет)

*билет и наличие брони столов даёт право пройти без очереди, но не отменяет FC!

Конюшенная площадь, 2В

ты нас сразу услышишь`,
      poster: posterVideo,
      video: posterVideo,
      tcEvent: '688e10fadfecc4593a46185e',
      tcToken: 'eyJhbGciOiJIUzI1NiIsImlzcyI6InRpY2tldHNjbG91ZC5ydSIsInR5cCI6IkpXVCJ9.eyJwIjoiNjMyMDZlZTc4NzQ5MDk3YzU5MmE2Njk3In0.o8XKf5PO_f33Eg3RIeUe2PYBEeuy4o2yI4vh6qQ21T8',
      activities: [
        'Масштабная пенная вечеринка 🫧',
        'Шоу мыльных пузырей 🥰',
        'Перфоманс с бассейном из шариков 🤩',
        'Водные пистолеты 🔫',
        'Фотозона 📸',
        'Специальные коктейли 🍸'
      ]
    }
  ]

  const handleTicketClick = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowTicketMenu(true)
  }

  const handleEventSelect = (event) => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setSelectedEvent(event)
    setShowTicketMenu(false)
    setEventVideoMuted(true)
  }

  const handleBookingClick = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowBookingSubmenu(!showBookingSubmenu);
  }

  const openPhoneNumber = () => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    if (window.Telegram?.WebApp && window.Telegram.WebApp.initData) {
      window.Telegram.WebApp.openTelegramLink('https://t.me/iv?url=tel:+79214104440');
    } else {
      window.location.href = 'tel:+79214104440';
    }
    setShowBookingSubmenu(false);
  }

  const openBookingWebsite = () => {
    window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
    window.open('https://vnvnc.ru/reservations', '_blank');
    setShowBookingSubmenu(false);
  }


  const openTelegramChannel = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    if (window.Telegram?.WebApp && window.Telegram.WebApp.initData) {
      window.Telegram.WebApp.openTelegramLink('https://t.me/vnvnc_spb');
    } else {
      window.open('https://t.me/vnvnc_spb', '_blank');
    }
  }

  const toggleMusic = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setMusicPlaying(!musicPlaying)
    }
  }

  const toggleEventMute = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setEventVideoMuted(!eventVideoMuted)
  }

  const showFullscreen = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowFullscreenVideo(true)
  }

  const closeFullscreenVideo = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setShowFullscreenVideo(false)
  }

  const toggleCircleVideoMute = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
    }
    setCircleVideoMuted(!circleVideoMuted)
  }

  return (
    <>
      {/* Splash Screen */}
      {showSplash && (
        <div className="splash-screen">
          <div className="splash-content">
            <h1 className="splash-title">ЖАРА</h1>
            <p className="splash-subtitle">5-6 СЕНТЯБРЯ</p>
            <div className="splash-waves">
              <Waves size={48} />
            </div>
          </div>
        </div>
      )}

      {/* Background Video */}
      <video 
        className="background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated Bubbles */}
      {bubblesAnimation && (
        <div className="bubbles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="bubble" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div className="app-container">
        {/* Circle Video */}
        {circleVideoSrc && (
          <div className={`circle-video-wrapper ${!circleVideoMuted ? 'expanded' : ''}`}>
            <video 
              ref={circleVideoRef}
              className="circle-video"
              src={circleVideoSrc}
              autoPlay
              loop
              muted={circleVideoMuted}
              playsInline
              onClick={toggleCircleVideoMute}
            />
            <div className="circle-video-overlay" onClick={toggleCircleVideoMute}>
              {circleVideoMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </div>
          </div>
        )}

        {/* Main Buttons */}
        <div className="main-buttons">
          <button className="summer-button ticket-button" onClick={handleTicketClick}>
            <Ticket size={24} className="button-icon" />
            <span>БИЛЕТЫ</span>
          </button>
          
          <div style={{ position: 'relative', width: '100%' }}>
            <button className="summer-button booking-button" onClick={handleBookingClick} ref={bookingBtnRef}>
              <Calendar size={24} className="button-icon" />
              <span>БРОНЬ СТОЛОВ</span>
            </button>
            
            {/* Booking Submenu */}
            {showBookingSubmenu && (
              <div className="booking-submenu" ref={submenuRef}>
                <button onClick={openPhoneNumber} className="submenu-item">
                  <Phone size={20} />
                  <span>Позвонить</span>
                </button>
                <button onClick={openBookingWebsite} className="submenu-item">
                  <Globe size={20} />
                  <span>Сайт</span>
                </button>
              </div>
            )}
          </div>

          <button className="summer-button telegram-button" onClick={openTelegramChannel}>
            <Send size={24} className="button-icon" />
            <span>TELEGRAM</span>
          </button>
        </div>
      </div>

      {/* Ticket Menu */}
      {showTicketMenu && (
        <div className="ticket-menu-overlay" onClick={() => {
          if (window.Telegram?.WebApp?.HapticFeedback) {
            window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
          }
          setShowTicketMenu(false)
        }}>
          <div className="ticket-menu" onClick={(e) => e.stopPropagation()}>
            <div className="ticket-menu-header">
              <h2>ВЫБЕРИТЕ ДЕНЬ</h2>
              <button className="close-button" onClick={() => {
                if (window.Telegram?.WebApp?.HapticFeedback) {
                  window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
                }
                setShowTicketMenu(false)
              }}>
                <X size={24} />
              </button>
            </div>
            <div className="events-list">
              {events.map(event => (
                <button 
                  key={event.id} 
                  className="event-item"
                  onClick={() => handleEventSelect(event)}
                >
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p className="event-time">{event.time}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Selected Event Details */}
      {selectedEvent && (
        <div className="event-details-overlay" onClick={() => {
          if (window.Telegram?.WebApp?.HapticFeedback) {
            window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
          }
          setSelectedEvent(null)
        }}>
          <div className="event-details" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => {
              if (window.Telegram?.WebApp?.HapticFeedback) {
                window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
              }
              setSelectedEvent(null)
            }}>
              <X size={24} />
            </button>
            
            <div className="event-video-container">
              <video 
                className="event-video"
                src={selectedEvent.video}
                muted={eventVideoMuted}
                loop
                autoPlay
                playsInline
              />
              <div className="video-controls">
                <button onClick={toggleEventMute} className="control-button">
                  {eventVideoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button onClick={showFullscreen} className="control-button">
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
            
            <div className="event-info">
              <div className="event-info-content">
                <h3 className="event-title">{selectedEvent.title}</h3>
                <p className="event-date-time">{selectedEvent.date} в {selectedEvent.time}</p>
                
                {selectedEvent.activities && (
                  <div className="activities-section">
                    <h4>Активности:</h4>
                    <ul className="activities-list">
                      {selectedEvent.activities.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <p className="event-description">{selectedEvent.description}</p>
              </div>
              
              <div className="event-info-sticky">
                <button 
                  className="buy-ticket-button"
                  data-tc-event={selectedEvent.tcEvent}
                  data-tc-token={selectedEvent.tcToken}
                  style={{ width: '100%' }}
                  onClick={() => {
                    if (!isMobile) {
                      const url = selectedEvent.id === 'sep5' 
                        ? 'https://63206ee78749097c592a6697.ticketscloud.org/e/688e104ddc1674ac983de8d6?partner_id=63206ee78749097c592a6697'
                        : 'https://63206ee78749097c592a6697.ticketscloud.org/e/688e10fadfecc4593a46185e?partner_id=63206ee78749097c592a6697';
                      window.open(url, '_blank');
                    }
                  }}
                >
                  КУПИТЬ БИЛЕТ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Video */}
      {showFullscreenVideo && selectedEvent && (
        <div className="fullscreen-video-overlay">
          <button className="fullscreen-close" onClick={closeFullscreenVideo}>
            <X size={24} />
          </button>
          <video 
            className="fullscreen-video"
            src={selectedEvent.video}
            autoPlay
            loop
            muted={eventVideoMuted}
            playsInline
            controls
          />
        </div>
      )}

      {/* Music Button */}
      <button className="music-button" onClick={toggleMusic}>
        {musicPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="/summer-music.mp3" loop />
    </>
  )
}

export default App