beforeEach ->
  @addMatchers
    toBePlaying: (expectedSong) ->
      player = @actual
      player.currentlyPlayingSong == expectedSong and player.isPlaying
