import { Stack } from "expo-router";
import Index from "."
export default function RootLayout() {
  // setting up the header of the application with the react's stack component.
  return <Stack

    screenOptions={{
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: "Chapter One Todo App :)"
      
    }}>
  </Stack>
}
