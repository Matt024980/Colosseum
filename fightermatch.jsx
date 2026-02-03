import React, { useState } from 'react';
import { Heart, X, MessageCircle, Calendar, Trophy, Weight, User, Target, Award, Clock, MapPin } from 'lucide-react';

const FighterMatchApp = () => {
  const [currentView, setCurrentView] = useState('discover'); // discover, matches, profile, createProfile
  const [currentFighterIndex, setCurrentFighterIndex] = useState(0);
  const [userProfile, setUserProfile] = useState(null);
  const [matches, setMatches] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);

  // Sample fighter data
  const [fighters] = useState([
    {
      id: 1,
      name: "Benard Mugita",
      age: 28,
      weight: "170 lbs",
      weightClass: "Welterweight",
      stance: "Orthodox",
      discipline: "Muay Thai",
      experience: "5 years",
      record: "12-3-0",
      achievements: ["2023 Regional Champion", "Golden Gloves Finalist"],
      location: "Maasai Lodge, Rongai",
      bio: "Looking for skilled sparring partners and competitive bouts. Traditional Muay Thai background with focus on clinch work.",
      availability: "Weekends preferred",
      image: "🥊"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      age: 25,
      weight: "135 lbs",
      weightClass: "Bantamweight",
      stance: "Southpaw",
      discipline: "Brazilian Jiu-Jitsu",
      experience: "7 years",
      record: "15-2-1",
      achievements: ["BJJ Brown Belt", "IBJJF Pan-American Silver"],
      location: "San Diego, CA",
      bio: "Purple belt seeking grappling matches and MMA sparring. Strong ground game, working on striking.",
      availability: "Flexible schedule",
      image: "🥋"
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 32,
      weight: "185 lbs",
      weightClass: "Middleweight",
      stance: "Orthodox",
      discipline: "Boxing",
      experience: "10 years",
      record: "20-5-2",
      achievements: ["Amateur National Champion", "10+ Pro Fights"],
      location: "Las Vegas, NV",
      bio: "Experienced boxer looking for competitive matches. Clean technique, strategic fighter.",
      availability: "Evening training sessions",
      image: "🥊"
    },
    {
      id: 4,
      name: "Yuki Tanaka",
      age: 27,
      weight: "155 lbs",
      weightClass: "Lightweight",
      stance: "Southpaw",
      discipline: "Karate / Kickboxing",
      experience: "8 years",
      record: "18-4-0",
      achievements: ["Karate Black Belt 3rd Dan", "National Kickboxing Champion"],
      location: "San Francisco, CA",
      bio: "Traditional karate background transitioning to kickboxing. Fast striker with excellent footwork.",
      availability: "Mornings and weekends",
      image: "🥋"
    }
  ]);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    
    setTimeout(() => {
      if (direction === 'right') {
        // Add to matches
        setMatches([...matches, fighters[currentFighterIndex]]);
      }
      
      if (currentFighterIndex < fighters.length - 1) {
        setCurrentFighterIndex(currentFighterIndex + 1);
      } else {
        setCurrentFighterIndex(0);
      }
      setSwipeDirection(null);
    }, 300);
  };

  const ProfileCreationForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      weight: '',
      weightClass: '',
      stance: 'Orthodox',
      discipline: '',
      experience: '',
      record: '',
      achievements: '',
      location: '',
      bio: '',
      availability: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setUserProfile({
        ...formData,
        achievements: formData.achievements.split(',').map(a => a.trim()),
        image: '👤'
      });
      setCurrentView('discover');
    };

    return (
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Your Fighter Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="number"
              placeholder="Age"
              className="p-3 border rounded-lg"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Weight (e.g., 170 lbs)"
              className="p-3 border rounded-lg"
              value={formData.weight}
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Weight Class"
              className="p-3 border rounded-lg"
              value={formData.weightClass}
              onChange={(e) => setFormData({...formData, weightClass: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <select
              className="p-3 border rounded-lg"
              value={formData.stance}
              onChange={(e) => setFormData({...formData, stance: e.target.value})}
              required
            >
              <option value="Orthodox">Orthodox</option>
              <option value="Southpaw">Southpaw</option>
              <option value="Switch">Switch</option>
            </select>
            <input
              type="text"
              placeholder="Discipline (e.g., MMA, Boxing)"
              className="p-3 border rounded-lg"
              value={formData.discipline}
              onChange={(e) => setFormData({...formData, discipline: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Experience (e.g., 5 years)"
              className="p-3 border rounded-lg"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Record (W-L-D)"
              className="p-3 border rounded-lg"
              value={formData.record}
              onChange={(e) => setFormData({...formData, record: e.target.value})}
            />
          </div>

          <input
            type="text"
            placeholder="Achievements (comma separated)"
            className="p-3 border rounded-lg w-full"
            value={formData.achievements}
            onChange={(e) => setFormData({...formData, achievements: e.target.value})}
          />

          <input
            type="text"
            placeholder="Location"
            className="p-3 border rounded-lg w-full"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
            required
          />

          <textarea
            placeholder="Bio - Tell others about your fighting style and what you're looking for"
            className="p-3 border rounded-lg w-full h-24"
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            required
          />

          <input
            type="text"
            placeholder="Availability (e.g., Weekends, Evenings)"
            className="p-3 border rounded-lg w-full"
            value={formData.availability}
            onChange={(e) => setFormData({...formData, availability: e.target.value})}
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-4 rounded-lg font-bold text-lg hover:bg-red-700 transition"
          >
            Create Profile
          </button>
        </form>
      </div>
    );
  };

  const FighterCard = ({ fighter }) => {
    return (
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto transition-transform duration-300 ${
          swipeDirection === 'left' ? '-translate-x-full opacity-0' : 
          swipeDirection === 'right' ? 'translate-x-full opacity-0' : ''
        }`}
      >
        <div className="bg-gradient-to-br from-red-500 to-orange-600 p-8 text-center">
          <div className="text-8xl mb-4">{fighter.image}</div>
          <h2 className="text-3xl font-bold text-white">{fighter.name}</h2>
          <p className="text-white text-lg">{fighter.age} years old</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Weight className="text-red-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Weight</p>
                <p className="font-semibold">{fighter.weight}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="text-red-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Class</p>
                <p className="font-semibold">{fighter.weightClass}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <User className="text-red-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Stance</p>
                <p className="font-semibold">{fighter.stance}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="text-red-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Record</p>
                <p className="font-semibold">{fighter.record}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm font-semibold text-gray-700 mb-1">Discipline</p>
            <p className="text-lg font-bold text-red-600">{fighter.discipline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Experience</p>
            <p>{fighter.experience}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Achievements</p>
            <div className="space-y-1">
              {fighter.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Award className="text-yellow-500" size={16} />
                  <p className="text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="text-gray-500" size={18} />
            <p className="text-sm text-gray-600">{fighter.location}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-1">About</p>
            <p className="text-sm text-gray-600">{fighter.bio}</p>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="text-gray-500" size={18} />
            <p className="text-sm text-gray-600">{fighter.availability}</p>
          </div>
        </div>
      </div>
    );
  };

  const DiscoverView = () => {
    if (fighters.length === 0) {
      return (
        <div className="text-center p-8">
          <p className="text-xl text-gray-600">No more fighters available right now</p>
        </div>
      );
    }

    return (
      <div className="p-6">
        <FighterCard fighter={fighters[currentFighterIndex]} />
        
        <div className="flex justify-center space-x-8 mt-8 max-w-md mx-auto">
          <button
            onClick={() => handleSwipe('left')}
            className="bg-gray-200 hover:bg-gray-300 p-6 rounded-full transition shadow-lg"
            aria-label="Pass"
          >
            <X className="text-gray-600" size={32} />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="bg-red-500 hover:bg-red-600 p-6 rounded-full transition shadow-lg"
            aria-label="Match"
          >
            <Heart className="text-white" size={32} />
          </button>
        </div>
      </div>
    );
  };

  const MatchesView = () => {
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [bookingDate, setBookingDate] = useState('');
    const [bookingType, setBookingType] = useState('sparring');

    const handleBookFight = (e) => {
      e.preventDefault();
      alert(`Fight booked with ${selectedMatch.name} on ${bookingDate} for ${bookingType}!`);
      setSelectedMatch(null);
      setBookingDate('');
    };

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Matches</h2>
        
        {matches.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600">No matches yet</p>
            <p className="text-gray-500 mt-2">Start swiping to find fighters!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matches.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-lg p-4 border-2 border-gray-100">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-5xl">{match.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl">{match.name}</h3>
                    <p className="text-sm text-gray-600">{match.discipline}</p>
                    <p className="text-sm text-gray-500">{match.weightClass} • {match.record}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => alert(`Chat feature coming soon! Message ${match.name}`)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex items-center justify-center space-x-2 transition"
                  >
                    <MessageCircle size={18} />
                    <span>Message</span>
                  </button>
                  <button
                    onClick={() => setSelectedMatch(match)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition"
                  >
                    <Calendar size={18} />
                    <span>Book Fight</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedMatch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Book a Fight with {selectedMatch.name}</h3>
              
              <form onSubmit={handleBookFight} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Fight Type</label>
                  <select
                    className="w-full p-3 border rounded-lg"
                    value={bookingType}
                    onChange={(e) => setBookingType(e.target.value)}
                    required
                  >
                    <option value="sparring">Sparring Session</option>
                    <option value="exhibition">Exhibition Match</option>
                    <option value="competition">Competition Fight</option>
                    <option value="training">Training Session</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full p-3 border rounded-lg"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedMatch(null)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition"
                  >
                    Send Booking Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ProfileView = () => {
    if (!userProfile) {
      return (
        <div className="text-center p-8">
          <p className="text-xl text-gray-600 mb-4">You haven't created a profile yet</p>
          <button
            onClick={() => setCurrentView('createProfile')}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Create Profile
          </button>
        </div>
      );
    }

    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Profile</h2>
        <FighterCard fighter={userProfile} />
        <button
          onClick={() => setCurrentView('createProfile')}
          className="w-full mt-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition"
        >
          Edit Profile
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-red-600 flex items-center space-x-2">
            <span>🥊</span>
            <span>FightMatch</span>
          </h1>
          <p className="text-sm text-gray-600">Connect. Train. Compete.</p>
        </div>
      </header>

      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex">
          <button
            onClick={() => setCurrentView('discover')}
            className={`flex-1 p-4 font-semibold transition ${
              currentView === 'discover' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setCurrentView('matches')}
            className={`flex-1 p-4 font-semibold transition relative ${
              currentView === 'matches' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Matches
            {matches.length > 0 && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {matches.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`flex-1 p-4 font-semibold transition ${
              currentView === 'profile' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Profile
          </button>
        </div>
      </nav>

      <main className="py-8">
        {currentView === 'discover' && <DiscoverView />}
        {currentView === 'matches' && <MatchesView />}
        {currentView === 'profile' && <ProfileView />}
        {currentView === 'createProfile' && <ProfileCreationForm />}
      </main>
    </div>
  );
};

export default FighterMatchApp;
