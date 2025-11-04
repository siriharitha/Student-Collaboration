import React, { useState, useRef, useEffect } from "react";
import { Search, Filter, Calendar, MapPin, Users } from "lucide-react";
import "./BrowseEvents.css";

const BrowseEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const teamSectionRef = useRef(null);

  // ✅ Handle smooth scroll when user clicks Team Finder in Navbar
  useEffect(() => {
    const handleScrollToTeam = () => {
      if (window.location.hash === "#team-section" && teamSectionRef.current) {
        teamSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleScrollToTeam();
    window.addEventListener("hashchange", handleScrollToTeam);
    return () => window.removeEventListener("hashchange", handleScrollToTeam);
  }, []);

  const events = [
    {
      title: "AI/ML Hackathon 2025",
      date: "April 5–7, 2025",
      location: "Computer Science Building",
      desc: "Focus on artificial intelligence and machine learning projects. Mentorship from AI researchers.",
      type: "Hackathon",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "UI/UX Design Workshop",
      date: "March 25, 2025",
      location: "Design Lab",
      desc: "Master the fundamentals of UI and UX design. Create beautiful, intuitive interfaces.",
      type: "Workshop",
      img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Startup Internships Expo",
      date: "April 1, 2025",
      location: "Student Union Hall",
      desc: "Explore internship opportunities with innovative startups. Get hands-on experience in fast-paced environments.",
      type: "Internship",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Web Dev Bootcamp",
      date: "May 10–12, 2025",
      location: "Innovation Center",
      desc: "Intensive bootcamp covering React, Node.js, and Express. Build full-stack apps in days.",
      type: "Workshop",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Cybersecurity Challenge",
      date: "June 15, 2025",
      location: "IT Hub Auditorium",
      desc: "Compete in penetration testing and ethical hacking events. Learn from industry experts.",
      type: "Hackathon",
      img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tech Job Fair 2025",
      date: "July 3, 2025",
      location: "Main Conference Hall",
      desc: "Meet leading companies hiring for internships and graduate roles in technology.",
      type: "Internship",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      (category === "All Categories" || event.type === category) &&
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="browse-events">
      <h2 className="browse-heading">Upcoming Events</h2>
      <p className="browse-subtext">
        Discover hackathons, workshops, and internships tailored for students
      </p>

      {/* ---------- SEARCH BAR ---------- */}
      <div className="search-bar">
        <div className="search-input">
          <Search size={18} color="#6b7280" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-select">
          <Filter size={18} color="#2563eb" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Hackathon</option>
            <option>Workshop</option>
            <option>Internship</option>
          </select>
        </div>

        <button className="search-btn">Search</button>
      </div>

      {/* ---------- EVENT CARDS ---------- */}
      <div className="events-container">
        {filteredEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <img
              src={event.img}
              alt={event.title}
              className="event-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/600x350?text=Event+Image";
              }}
            />
            <span className={`event-type ${event.type.toLowerCase()}`}>
              {event.type}
            </span>
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>{event.desc}</p>

              <div className="event-details">
                <p>
                  <Calendar size={16} /> {event.date}
                </p>
                <p>
                  <MapPin size={16} /> {event.location}
                </p>
              </div>

              <div className="event-buttons">
                <button className="view-btn">View Details</button>
                <button className="register-btn">Register</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- FIND YOUR TEAM SECTION ---------- */}
      <div className="team-section" ref={teamSectionRef} id="team-section">
        <h2 className="team-heading">Find Your Team</h2>
        <p className="team-subtext">
          Connect with talented students looking for teammates
        </p>

        {/* 🔍 Search Bar */}
        <div className="team-search">
          <Search size={18} color="#6b7280" />
          <input
            type="text"
            placeholder="Search by name, skills, or interests..."
          />
          <button>Search</button>
        </div>

        {/* 👥 Team Cards */}
        <div className="team-cards">
          {/* Profile 1 */}
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Alex Johnson"
              className="team-avatar"
            />
            <div className="team-info">
              <h3>Alex Johnson</h3>
              <p>MIT - Computer Science</p>
              <div className="skills">
                <span>React</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>UI/UX</span>
              </div>
              <p className="looking-for">
                <strong>Looking for:</strong> Backend developer for AI hackathon
              </p>
              <p className="members">
                <Users size={15} /> 2/4 members
              </p>
              <button className="connect-btn">Connect</button>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Sarah Chen"
              className="team-avatar"
            />
            <div className="team-info">
              <h3>Sarah Chen</h3>
              <p>Stanford - Software Engineering</p>
              <div className="skills">
                <span>Machine Learning</span>
                <span>TensorFlow</span>
                <span>Data Science</span>
              </div>
              <p className="looking-for">
                <strong>Looking for:</strong> Team for ML competition
              </p>
              <p className="members">
                <Users size={15} /> 1/3 members
              </p>
              <button className="connect-btn">Connect</button>
            </div>
          </div>

          {/* Profile 3 */}
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Rohit Sharma"
              className="team-avatar"
            />
            <div className="team-info">
              <h3>Rohit Sharma</h3>
              <p>IIT Delhi - Information Technology</p>
              <div className="skills">
                <span>JavaScript</span>
                <span>React</span>
                <span>MongoDB</span>
              </div>
              <p className="looking-for">
                <strong>Looking for:</strong> Frontend partner for web dev hackathon
              </p>
              <p className="members">
                <Users size={15} /> 3/5 members
              </p>
              <button className="connect-btn">Connect</button>
            </div>
          </div>

          {/* Profile 4 */}
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Priya Patel"
              className="team-avatar"
            />
            <div className="team-info">
              <h3>Priya Patel</h3>
              <p>NIT Trichy - Computer Science</p>
              <div className="skills">
                <span>Python</span>
                <span>Flask</span>
                <span>Data Analysis</span>
              </div>
              <p className="looking-for">
                <strong>Looking for:</strong> Team for data visualization challenge
              </p>
              <p className="members">
                <Users size={15} /> 2/4 members
              </p>
              <button className="connect-btn">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseEvents;
