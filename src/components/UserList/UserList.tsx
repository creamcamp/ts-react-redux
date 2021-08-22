import React, { FC, useEffect } from 'react'
import { useTypeSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { IUser } from '../../types/users';

export const UserList: FC = () => {
    const { users, error, loading } = useTypeSelector(state => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>User loading is in progress...</h1>
    }

    if (error) {
        return <h1>{ error }</h1>
    }

    return (
        <div
            className="User-List"
        >
            { users.map(user => <div key={user.id}>{ user.name }</div>) }
        </div>
    )
}
