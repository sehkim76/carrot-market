import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import React from 'react'

const UserPage = async () => {
  const session = await getServerSession(authOptions);
  console.log('[UserPage] session', session);
  return (
    <div>사용자 페이지입니다.</div>
  )
}

export default UserPage