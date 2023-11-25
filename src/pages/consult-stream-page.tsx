import '@livekit/components-styles';
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  ParticipantTile,
  RoomAudioRenderer,
  useTracks,
} from '@livekit/components-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Track } from 'livekit-client';

const serverUrl = 'wss://hack-qqb39xmg.livekit.cloud';

const ConsultStreamPage = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://port-0-server-5mk12alpcf008f.sel5.cloudtype.app/getToken?name=${new Date()}`
        );

        setToken(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (token === '') {
    return <div>Getting token...</div>;
  }

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      serverUrl={serverUrl}
      data-lk-theme="default"
      style={{ height: '100vh' }}
    >
      <MyVideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
};

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    [
      { source: Track.Source.Camera, withPlaceholder: true },
      { source: Track.Source.ScreenShare, withPlaceholder: false },
    ],
    { onlySubscribed: false }
  );
  return (
    <GridLayout
      tracks={tracks}
      style={{ height: 'calc(90vh - var(--lk-control-bar-height))' }}
    >
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}

export default ConsultStreamPage;
