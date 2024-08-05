import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import beachImage from "@/assets/meditation-images/beach.webp"
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImageBackground = styled(ImageBackground)
const StyledSafeAreaView = styled(SafeAreaView)
const StyledLinearGradient = styled(LinearGradient)

const App = () => {
  return (
    <StyledView className='flex-1'>
      <StyledImageBackground 
        source={beachImage} 
        className='flex-1'
        resizeMode='cover'
      >
        <StyledLinearGradient
          className='flex-1' 
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <StyledSafeAreaView className='flex-1'>
            <StyledView className='flex-1 px-1 mt-10'>
              <StyledText className='text-4xl font-bold text-center text-white'>
                Simple Meditation
              </StyledText>
              <StyledText className='mt-3 text-2xl font-bold text-center text-white '>
                Simplifying Meditation for Everyone
              </StyledText>
            </StyledView>
            <StatusBar style='light' />
          </StyledSafeAreaView>
        </StyledLinearGradient>
      </StyledImageBackground>
    </StyledView>
  )
}

export default App