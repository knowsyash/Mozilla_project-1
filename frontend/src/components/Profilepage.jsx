import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

function ProfilePage() {
    const profileImage = "https://picsum.photos/200/200";
    const postImage = "https://picsum.photos/200/300";

    const navOptions = [
        "Posts",
        "Replies",
        "Highlights",
        "Articles",
        "Media",
        "Likes",
        "Favorites"
    ];

    // Sample data for posts
    const posts = [
        {
            id: 1,
            image: postImage,
            date: "2022-01-01",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stats: { likes: 100, shares: 20, saves: 10 }
        },
        {
            id: 2,
            image: postImage,
            date: "2022-01-02",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            stats: { likes: 150, shares: 30, saves: 15 }
        },
    ];

    // Calculate total likes, shares, and saves
    const totalStats = posts.reduce((acc, post) => {
        acc.likes += post.stats.likes;
        acc.shares += post.stats.shares;
        acc.saves += post.stats.saves;
        return acc;
    }, { likes: 0, shares: 0, saves: 0 });

    return (
        <div className="container">
            <div className="profile-header d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: '#f5f5f5' }}>
                <img src={profileImage} alt="Profile" className="profile-image rounded-circle mr-3" style={{ width: '100px', height: '100px' }} />
                <div className="d-flex">
                    <div className="text-center mx-3">
                        <h4>{posts.length}</h4>
                        <p>Posts</p>
                    </div>
                    <div className="text-center mx-3">
                        <h4>1000</h4>
                        <p>Followers</p>
                    </div>
                    <div className="text-center mx-3">
                        <h4>500</h4>
                        <p>Following</p>
                    </div>
                </div>
            </div>

            <div className="profile-content mt-4 text-center">
                <h2>Luna Smith</h2>
                <p>Software Engineer at ABC Company</p>
                <p>San Francisco, CA</p>
            </div>

            {/* Navigation Options */}
            <div className="profile-navigation mt-4 d-flex justify-content-around">
                {navOptions.map((option, index) => (
                    <div key={index} className="nav-option" style={{ cursor: 'pointer', color: 'black' }}>
                        {option}
                    </div>
                ))}
            </div>

            {/* Total Post Statistics */}
            <div className="post-stats mt-4 d-flex justify-content-around">
                <div className="stat text-center">
                    <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '24px', color: 'black' }} />
                    <h4>{totalStats.likes}</h4>
                    <p>Total Likes</p>
                </div>
                <div className="stat text-center">
                    <FontAwesomeIcon icon={faShare} style={{ fontSize: '24px', color: 'black' }} />
                    <h4>{totalStats.shares}</h4>
                    <p>Total Shares</p>
                </div>
                <div className="stat text-center">
                    <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '24px', color: 'black' }} />
                    <h4>{totalStats.saves}</h4>
                    <p>Total Saves</p>
                </div>
            </div>

            {/* Individual Posts */}
            <div className="mt-4">
                {posts.map((post) => (
                    <div key={post.id} className="post border rounded p-3 mb-4">
                        <div className="d-flex justify-content-between">
                            <h4>Post {post.id}</h4>
                            <p>Posted on {post.date}</p>
                        </div>
                        <img src={post.image} alt="Post" className="post-image img-fluid mb-3" />
                                                <p>{post.content}</p>
                        <div className="post-stats d-flex justify-content-around mt-3">
                            <div className="stat text-center">
                                <FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: '20px', color: 'black' }} />
                                <h5>{post.stats.likes}</h5>
                                <p>Likes</p>
                            </div>
                            <div className="stat text-center">
                                <FontAwesomeIcon icon={faShare} style={{ fontSize: '20px', color: 'black' }} />
                                <h5>{post.stats.shares}</h5>
                                <p>Shares</p>
                            </div>
                            <div className="stat text-center">
                                <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '20px', color: 'black' }} />
                                <h5>{post.stats.saves}</h5>
                                <p>Saves</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;