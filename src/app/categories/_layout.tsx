import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function CategoryLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name='[slug]'
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='arrow-back' size={24} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
