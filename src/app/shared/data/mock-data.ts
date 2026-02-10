export const MOCK_IMAGES = [
  // Technology & Workspace
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000',
  'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',

  // People & Avatars
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',

  // Abstract & Creative
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000',
  'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=1000',

  // Nature & Calm
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000',
  'https://images.unsplash.com/photo-1501854140884-074bf6bca21c?q=80&w=1000',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000',
];

export const MOCK_AVATARS = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000',
];

export function getRandomImage(): string {
  return MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)];
}

export function getRandomAvatar(): string {
    return MOCK_AVATARS[Math.floor(Math.random() * MOCK_AVATARS.length)];
}

export function getImageByIndex(index: number): string {
    return MOCK_IMAGES[index % MOCK_IMAGES.length];
}

export function getAvatarByIndex(index: number): string {
    return MOCK_AVATARS[index % MOCK_AVATARS.length];
}
