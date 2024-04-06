// ブログ一覧ページ（ホーム）
import { getAllPosts } from "../lib/index";
import { BlogList } from "@/components/BlogList/BlogList";
import { NotionPost } from "@/types/NotionPost";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export const revalidate = 60;

export default async function Home() {
  const posts: NotionPost[] = await getAllPosts();

  return (
    <div className="flex flex-col p-8 lg:w-4/6 mx-auto items-center">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <BlogList notionPosts={posts} />
      </div>
            
      <Stack height="100lvh" justifyContent="center" alignItems="center" gap="32px">
      <Typography id="login_heading" variant="h1" fontSize="1.5rem">フォーム</Typography>
      <Stack component="form" width={560} gap="24px" aria-labelledby="login_heading">
        <TextField label="検索フォーム" />
        <TextField label="追記欄" />
        </Stack>
        <Stack direction="row">
          <Stack>
        <Accordion >
  <AccordionSummary id="panel-header" aria-controls="panel-content">
    Header
  </AccordionSummary>

  <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Header last
  </AccordionDetails>
  </Accordion>
  <Accordion>
  <AccordionSummary id="panel-header" aria-controls="panel-content">
    構築時設定
  </AccordionSummary>
  <AccordionDetails>
    テンプレート出力設定
  </AccordionDetails>
</Accordion>
</Stack>
<Box sx={{ m: '2rem' }} />
<Box sx={{ mx: 'auto' }} />
<DataGrid rows={rows} columns={columns} />
        
</Stack>
    </Stack>
    </div>
  );
}