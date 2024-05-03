import {Card, CardMedia, Chip, Stack} from "@mui/material";

function SkillCard({
                       image,
                       list,
                   }: {
    image: string;
    list: string[];
}){
    return <Card raised >
        <CardMedia component="img" sx={{ height: 200 }} image={image}></CardMedia>
        <Stack direction={"row"} spacing={1} p={2} useFlexGap flexWrap="wrap" >
            {list.map((item) => (
                <Chip label={item} color="primary" size="small" />
            ))}
        </Stack>
    </Card>
}
export default SkillCard;