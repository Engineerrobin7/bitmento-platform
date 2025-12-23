import React from 'react'
import { Rocket } from 'lucide-react'

const ComingSoon: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-6">
        <Rocket className="mx-auto mb-4 w-16 h-16 text-purple-400" />
        <h1 className="text-4xl font-bold mb-2">BitMento</h1>
        <p className="text-lg text-gray-300">Your Personalised AI Programming Mentor — Coming Soon</p>
      </div>
    </main>
  )
}

export default ComingSoon
