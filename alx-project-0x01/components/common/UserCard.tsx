import { UserProps } from '@/interfaces';
import React from 'react';

// File: /Users/yohannesm/Desktop/ALX/FE/alx-project-0x01-setup/alx-project-0x01/components/common/UserCard.tsx



const UserCard: React.FC<UserProps> = ({ name, avatarUrl, bio }) => {
    return (
        <div style={styles.card}>
            <img src={avatarUrl} alt={`${name}'s avatar`} style={styles.avatar} />
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.bio}>{bio}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        margin: '16px auto',
        textAlign: 'center',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '12px',
    },
    name: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '8px 0',
    },
    bio: {
        fontSize: '1rem',
        color: '#555',
    },
};

export default UserCard;