import React, { useEffect, useState } from "react";
import { apiService } from "src/api/api";
import { Table, TableHead, TableBody, Typography, TableRow, Chip, TableCell, Box } from "@mui/material";
import DashboardCard from "src/components/shared/DashboardCard";

export const LastSpents = () => {
    const [spents, setSpents] = useState([]);
    useEffect(() => {
        apiService.getSpents()
            .then((response) => {
                console.log(response.data);
                const spentsWithNumbers = response.data.map(spent => ({
                    ...spent,
                    value: parseFloat(spent.value)
                }) )
                setSpents(spentsWithNumbers);
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <DashboardCard title={"Ultimos Gastos"}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table aria-aria-label="simple table" sx={{ whiteSpace: 'nowrap', mt: '2' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Título
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Motivo
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Produtos
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Total Gasto
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {spents.map((spent) => (
                            <TableRow>
                                <TableCell>
                                    <Typography>
                                        {spent.title}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {spent.reason}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {spent.products}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {spent.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    )
}