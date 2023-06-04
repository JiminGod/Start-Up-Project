package com.react.sup.board;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    private final BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    public Board getBoardById(Long id) {
        return boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Board not found with id: " + id));
    }

    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }

    public Board updateBoard(Long id, Board updatedBoard) {
        Board board = getBoardById(id);
        board.setTitle(updatedBoard.getTitle());
        board.setContent(updatedBoard.getContent());
        board.setWriter(updatedBoard.getWriter());
        return boardRepository.save(board);
    }

    public void deleteBoard(Long id) {
        Board board = getBoardById(id);
        boardRepository.delete(board);
    }

}
